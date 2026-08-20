// getUser(id, callback)
// getOrders(userId, callback)
// getOrderDetails(orderId, callback)



// 1. You define the orchestrator
function fetchAllDataForUser(userId) {
  console.log("Starting the chain for user:", userId);

  // 2. You trigger the first function
  getUser(userId, (err, user) => {
    if (err) return console.error('Step 1 Failed:', err);

    // The baton is handed to the next runner
    getOrders(user.id, (err, orders) => {
      if (err) return console.error('Step 2 Failed:', err);

      // The baton is handed to the final runner
      getOrderDetails(orders[0].id, (err, details) => {
        if (err) return console.error('Step 3 Failed:', err);

        // Finally, the result!
        console.log('Final Result:', details);
      });
    });
  });
}

// 3. THIS is your function call that triggers the entire chain
fetchAllDataForUser(101);