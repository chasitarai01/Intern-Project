import axios from "axios";
import Payment from "../Model/khaltiModel.js";

// initiate Khalti payment (Mocked, no external call)
export const addKhalti = async (req, res) => {
    const { paymentMethod, paymentStatus, pidx, orderId, totalAmount } = req.body;

    if (!paymentMethod || !orderId || !totalAmount) {
        return res.status(400).json({ message: "Missing required fields: paymentMethod, orderId, or totalAmount" });
    }

    try {
        // Create initial payment record in DB
        const payment = await Payment.create({
            paymentMethod,
            paymentStatus: paymentStatus || 'unpaid',
            amount: totalAmount,
            orderId
        });

        if (paymentMethod === "khalti") {
            // ✅ MOCKED Khalti-style response (no network call)
            const khaltiResponse = {
                pidx: "mocked-pidx-" + orderId,
                payment_url: `http://localhost:5173/fake-payment-gateway/${orderId}`,
                status: "Initiated",
            };

            // Update DB with mocked pidx
            payment.pidx = khaltiResponse.pidx;
            await payment.save();

            return res.status(200).json({
                message: "Payment initiated successfully (mock)",
                url: khaltiResponse.payment_url,
                data: khaltiResponse,
            });
        } else {
            return res.status(400).json({ message: "Unsupported payment method" });
        }
    } catch (error) {
        console.error("Error initiating Khalti payment:", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Verify Khalti transaction using pidx (Mocked)
export const verifyTransaction = async (req, res) => {
    const { pidx } = req.body;

    if (!pidx) {
        return res.status(400).json({ message: "Please provide pidx" });
    }

    try {
        // ✅ MOCKED Khalti verification result
        const data = {
            pidx,
            status: "Completed",
        };

        // Simulate DB update
        const payment = await Payment.findOneAndUpdate(
            { pidx },
            { paymentStatus: 'paid' },
            { new: true }
        );

        if (payment) {
            return res.status(200).json({
                message: 'Payment verified successfully (mock)',
                payment
            });
        } else {
            return res.status(404).json({ message: 'Payment record not found' });
        }
    } catch (error) {
        console.error("Error verifying Khalti payment:", error);
        return res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};
