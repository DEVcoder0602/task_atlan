import { NextResponse } from "next/server";

const models = require("../../../data/data");

const allmodels = models;

export async function POST(req) {
  try {
    const addedModel = await req.json();

    const newModel = {
      id: models.length + 1,
      addedModel,
    };

    allmodels.push(newModel);

    return NextResponse.json(
      {
        sucess: "true",
        message: "Model added successfully",
        data: newModel,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: "false",
        message: "Unable to add model",
        error: error.message,
      },
      { status: 400 }
    );
  }
}
