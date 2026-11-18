export const healthService = {
  getHealth() {
    return {
      status: "healthy",
      service: "teamflow-api",
      timestamp: new Date().toISOString(),
    };
  },
};
