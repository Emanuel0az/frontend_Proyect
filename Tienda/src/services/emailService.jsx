export const sendEmail = async (to, subject, text) => {
    try {
        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: to,
                subject: subject,
                text: text
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Error sending email');
    }
};
