function Education() {
  return (
    <div id="education" className="bg-black text-white py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-12">
        Education 🎓
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">

        {/* BE */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold">
            Master of Technology (MTech)
          </h3>
          <p className="text-gray-400">
            University of Visvesvaraya College of Engineering - UVCE
          </p>
          <p className="text-gray-400">
            Computer Science and Engineering - 9.02
          </p>
          <p className="text-gray-500 text-sm">
            2024 - 2026
          </p>
        </div>

        {/* BCom */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold">
            Bachelor of Engineering (BE)
          </h3>
          <p className="text-gray-400">
            Visvesvaraya Technological University
          </p>
          <p className="text-gray-400">
            Information Science and Engineering - 8.27
          </p>
          <p className="text-gray-500 text-sm">
            2020-2024
          </p>
        </div>

      </div>
    </div>
  );
}

export default Education;