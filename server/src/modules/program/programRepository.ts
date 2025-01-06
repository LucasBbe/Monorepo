import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

class programRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM category");

    return rows;
  }
}

export default new programRepository();
