function Projects() {
  return (
    <div id="projects" className="bg-gray-950 text-white py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects 💻
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {/* Project 1 */}
        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">

          {/* IMAGE PLACEHOLDER */}
          <div className="w-full h-40 bg-gray-800 flex items-center justify-center text-gray-500">
           
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3">
              AI Powered Financial Fraud Detection and Risk Analytics 
            </h3>

            <p className="text-gray-400 mb-4">
              Developed an end-to-end machine learning system to detect fraudulent financial transactions. Handled highly imbalanced datasets. 
SMOTE to improve fraud detection recall. Trained and optimized Random Forest models for risk prediction.
Built interactive analytics dashboard with executive summary and real-time updates.

            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Scikit-learn</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Pandas</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">SMOTE</span>
            </div>

            <a href="https://github.com/DeepashreeR02/AI-Powered-Fraud-Detection" className="underline hover:text-gray-400">
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">

          <div className="w-full h-40 bg-gray-800 flex items-center justify-center text-gray-500">
           
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3">
              Customer Segmentation Model
            </h3>

            <p className="text-gray-400 mb-4">
              Implemented a customer segmentation model using K-Means Clustering for precise marketing and improved customer satisfaction. Assessed model performance with silhouette scores and validated result through domain expertise.
Applied insights from segmentation to enhance personalized marketing, product recommendations, customer retention strategies, contributing to increased revenue and competitive advantage.

            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">PowerBI</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">K-Means Clusterring</span>
            </div>

            <a href="https://github.com/DeepashreeR02/customer_segmentation_project" className="underline hover:text-gray-400">
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">

          <div className="w-full h-40 bg-gray-800 flex items-center justify-center text-gray-500">
            
            
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3">
              EduBuddy AI
            </h3>

            <p className="text-gray-400 mb-4">
              AI-powered platform that converts prompts into structured personalized learning courses.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Django</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">OpenAI API</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
            </div>

            <a href="https://github.com/DeepashreeR02/EduBuddy-AI" className="underline hover:text-gray-400">
              View Project
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">

          <div className="w-full h-40 bg-gray-800 flex items-center justify-center text-gray-500">
           
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3">
              Network Intrusion Detection
            </h3>

            <p className="text-gray-400 mb-4">
              Built a Machine Learning-Based Network Intrusion Detection System using Python to detect malicious network activities.
Trained and compared Random Forest, XGBoost, and MLP models with standard evaluation metrics. Integrated models into a Flask web application with a responsive UI for intrusion analysis.


            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Flask</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">XGBoost</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Random Forest, MLP</span>
            </div>

            <a href="https://github.com/DeepashreeR02/Network-Intrusion-Detection" className="underline hover:text-gray-400">
              View Project
            </a>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Projects;