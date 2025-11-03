export default function AdminDemo() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
        <p className="text-gray-600 mb-6">
          This is a demo version of the Bahama Mama website. The admin dashboard 
          functionality would be fully implemented in the production version.
        </p>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h2 className="font-semibold text-teal-800 mb-2">Production Features Would Include:</h2>
          <ul className="text-sm text-teal-700 text-left space-y-1">
            <li>• Customer inquiry management</li>
            <li>• Product inventory tracking</li>
            <li>• Sales analytics</li>
            <li>• Content management</li>
            <li>• User management</li>
          </ul>
        </div>
      </div>
    </div>
  )
}