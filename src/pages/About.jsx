export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-gray-700">
        Modeling and Dynamic Grouping of Nodes
      </h1>
      <h2 className="text-xl font-semibold text-gray-700">
        (Relational Grouping Based on Logical Order)
      </h2>

      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-2"> - General Objective</h3>
        <p className="text-gray-700">
          Design and develop a system that allows the representation of nodes within a category hierarchy, with the ability to tag them, group them under various combinable criteria, and apply logical filters for selection, classification, or exclusion.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-gray-800 mb-2"> - Vision</h3>
        <p className="text-gray-700">
          The system will simulate an environment where each node represents an entity identifiable by key attributes (such as name, plate, number, etc.) and will be classified within a category. Tags can be added as an additional filtering method. The end user will be able to perform hierarchical and/or property-based grouping operations, with configurable inclusion/exclusion filters.
        </p>
      </section>
    </div>
  );
}