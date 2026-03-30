const Stat = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 sm:py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center text-white">
          <div className="px-6 py-4 sm:border-r sm:border-white/30">
            <h2 className="text-4xl sm:text-5xl font-bold">50K+</h2>
            <p className="mt-2 text-sm sm:text-base text-white/80">
              Active Users
            </p>
          </div>

          <div className="px-6 py-4 sm:border-r sm:border-white/30">
            <h2 className="text-4xl sm:text-5xl font-bold">200+</h2>
            <p className="mt-2 text-sm sm:text-base text-white/80">
              Premium Tools
            </p>
          </div>

          <div className="px-6 py-4">
            <h2 className="text-4xl sm:text-5xl font-bold">4.9</h2>
            <p className="mt-2 text-sm sm:text-base text-white/80">Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stat;
