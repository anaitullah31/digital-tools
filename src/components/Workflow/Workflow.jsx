const Workflow = () => {
  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Ready To Transform Your Workflow?
        </h2>

        <p className="mt-4 text-sm sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn bg-white text-[#4F39F6] border-none rounded-full px-6 hover:bg-white">
            Explore Products
          </button>

          <button className="btn btn-outline text-white border-white rounded-full px-6 hover:bg-white hover:text-[#4F39F6]">
            View Pricing
          </button>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-white/80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Workflow;
