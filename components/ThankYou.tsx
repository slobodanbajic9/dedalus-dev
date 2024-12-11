interface ThankYouProps {
  success: boolean;
}

const ThankYou = ({ success }: ThankYouProps) => {
  return (
    <div className="text-center p-4 rounded-lg">
      {success ? (
        <p className="text-black dark:text-white text-lg">
          Thank you for your message! I`ll get back to you as soon as possible.
        </p>
      ) : (
        <p className="text-black dark:text-white text-lg">
          Something went wrong. Please try again later or contact me directly
          via email.
        </p>
      )}
    </div>
  );
};

export default ThankYou;
