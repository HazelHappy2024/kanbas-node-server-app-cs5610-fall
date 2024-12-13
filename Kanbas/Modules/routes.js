import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {


  app.delete("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    try {
      const status = await modulesDao.deleteModule(moduleId);
      res.send(status);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Failed to delete module" });
    }
  });
  


  app.put("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    const status = modulesDao.updateModule(moduleId, moduleUpdates);
    res.send(status);
  });
}
