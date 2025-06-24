export const mangoPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mango API Documentation</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-yellow-50 font-sans text-gray-800">

  <!-- Server Running Notification -->
  <div class="bg-green-200 text-green-900 text-center py-2 font-medium animate-bounce shadow-md">
    🥭 Mango API Server is Running Smoothly...
  </div>

  <!-- Header -->
  <header class="bg-yellow-300 shadow-md py-6 px-4 text-center">
    <h1 class="text-4xl font-bold text-orange-800">Mango API</h1>
    <p class="text-lg text-orange-700 mt-1">Tropical RESTful API for users, mangoes, and orders</p>
  </header>

  <!-- Main Content -->
  <main class="max-w-4xl mx-auto py-10 px-4 space-y-10">

    <!-- User Section -->
    <section class="bg-white shadow-md rounded-xl p-6 border-l-8 border-orange-400">
      <h2 class="text-2xl font-bold text-orange-700 mb-4">👤 User API</h2>
      <ul class="space-y-2">
        <li><span class="font-semibold text-orange-600">GET</span> /user – Get all users</li>
        <li><span class="font-semibold text-orange-600">GET</span> /user/:userId – Get a user by ID</li>
        <li><span class="font-semibold text-orange-600">POST</span> /user – Create a user</li>
        <li><span class="font-semibold text-orange-600">PATCH</span> /user/:userId – Update user by ID</li>
        <li><span class="font-semibold text-orange-600">DELETE</span> /user/:userId – Delete user by ID</li>
      </ul>
    </section>

    <!-- Mango Section -->
    <section class="bg-white shadow-md rounded-xl p-6 border-l-8 border-yellow-500">
      <h2 class="text-2xl font-bold text-yellow-700 mb-4">🥭 Mango API</h2>
      <ul class="space-y-2">
        <li><span class="font-semibold text-yellow-600">GET</span> /mango – Get all mangoes</li>
        <li><span class="font-semibold text-yellow-600">GET</span> /mango/:mangoId – Get a mango by ID</li>
        <li><span class="font-semibold text-yellow-600">POST</span> /mango – Add new mango</li>
        <li><span class="font-semibold text-yellow-600">PATCH</span> /mango/:mangoId – Update mango by ID</li>
        <li><span class="font-semibold text-yellow-600">DELETE</span> /mango/:mangoId – Delete mango by ID</li>
      </ul>
    </section>

    <!-- Order Section -->
    <section class="bg-white shadow-md rounded-xl p-6 border-l-8 border-green-500">
      <h2 class="text-2xl font-bold text-green-700 mb-4">📦 Order API</h2>
      <ul class="space-y-2">
        <li><span class="font-semibold text-green-600">GET</span> /order – Get all orders</li>
        <li><span class="font-semibold text-green-600">GET</span> /order/:orderId – Get order by ID</li>
        <li><span class="font-semibold text-green-600">POST</span> /order – Create new order</li>
        <li><span class="font-semibold text-green-600">PATCH</span> /order/:orderId – Update order by ID</li>
        <li><span class="font-semibold text-green-600">DELETE</span> /order/:orderId – Cancel order by ID</li>
      </ul>
    </section>
  </main>

  <!-- Footer -->
  <footer class="text-center bg-yellow-200 py-4 mt-10 text-sm text-orange-800">
    &copy; 2025 Mango API 🍃 | Sweet, simple, scalable.
  </footer>

</body>
</html>
`;
