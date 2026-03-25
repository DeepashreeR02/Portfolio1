function Skills() {
  return (
    <div id="skills" className="bg-black text-white py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-12">
        Technologies & Skills 🚀
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {/* Machine Learning */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4">Programming & Database</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Python</li>
            <li>SQL</li>
            <li>Pytorch</li>
          </ul>
        </div>

        {/* Programming */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4">Data Analysis and Visualization</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Pandas</li>
            <li>Numpy</li>
            <li>EDA</li>
            <li>Satistical Analysis</li>
            <li>PowerBI</li>
            <li>A/B Testing Basics</li>
          </ul>
        </div>

        {/* Web Development */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4">Machine Learning</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Scikit-Learn</li>
            <li>Classification</li>
            <li>Clusterring</li>
            <li>Regression</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4">Additional Tech Skills</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Database Mangement System</li>
            <li>Computer Networking</li>
            <li>API's: REST API's, API Integration, JSON Handling</li>
            <li>Tools: Postman, Git, VS Code </li>
            <li>Regression</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Problem Solving</li>
            <li>Analytical Thinking</li>
            <li>Attention to Detail</li>
            <li>People Person</li>
            <li>Time Management</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;