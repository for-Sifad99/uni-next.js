// src/app/courses/[id]/page.jsx
export default async function ProductDetails({ params }) {
  const id = params.id; 

  const res = await fetch(`http://localhost:5000/course/${id}`, {
    cache: 'no-store', // fresh data
  });
  const product = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-500 mb-6">by {product.author}</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl shadow-md w-full object-cover"
          />

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">About Course</h2>
            <p className="text-gray-700">{product.overview}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Course Content</h2>
            <ul className="space-y-2">
              {product.lectures.map((lec, i) => (
                <li
                  key={i}
                  className="border rounded-lg p-3 bg-gray-50 hover:bg-gray-100"
                >
                  {lec}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-5 border rounded-xl shadow-md bg-white">
          <p className="text-lg font-bold mb-3">Price: {product.price}</p>
          <p className="text-sm text-gray-500 mb-4">
            Duration: {product.duration}
          </p>
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600">
            Start Learning
          </button>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">What Will You Learn?</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {product.learning_outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
