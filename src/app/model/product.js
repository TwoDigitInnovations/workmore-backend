"use strict";

const mongoose = require("mongoose");
const productchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    categoryName: {
      type: String,
    },
    gender: {
      type: String,
    },
    manufacturername: {
      type: String,
    },
    name: {
      type: String,
    },
    image: {
      type: [String],
    },
    relatedName: {
      type: [],
    },
    slug: {
      type: String,
    },
    image: {
      type: String,
    },
    imageAltName: {
      type: String,
    },
    metatitle: {
      type: String,
    },
    metadescription: {
      type: String,
    },

    description: {
      type: String,
    },
    pieces: {
      type: Number,
    },
    sold_pieces: {
      type: Number,
      default: 0,
    },
    varients: {
      type: [],
    },

    minQuantity: {
      type: Number,
    },

    price_slot: [],

    status: {
      type: String,
      enum: ["verified", "suspended"],
      default: "verified",
    },

    Quantity: {
      type: Number,
    },

  },
  {
    timestamps: true,
  }
);

productchema.set("toJSON", {
  getters: true,
  virtuals: false,
  transform: (doc, ret, options) => {
    delete ret.__v;
    return ret;
  },
});

module.exports = mongoose.model("Product", productchema);
