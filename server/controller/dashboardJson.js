// 

import jsonDashboadrSchema from '../models/dashboardSchemaModel.js';

const getJsonData = async (req, res, next) => {
  try {
    const data = await jsonDashboadrSchema.find(req.query);

    res.status(200).json(data);
  } 
  catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the data.',
      error: error.message,
    });
  }
};

export default getJsonData;