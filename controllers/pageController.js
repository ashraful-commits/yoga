const path = require('path');
const url = require('url');
const Homepageshow = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, '../public/index.html'));
};
const aboutpageshow = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, '../public/about.html'));
};
const classespageshow = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, '../public/classes.html'));
};
const pricingpageshow = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, '../public/pricing.html'));
};
const yogapageshow = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, '../public/yoga.html'));
};
const contactpageshow = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, '../public/contact.html'));
};
const resultpageshow = (req, res) => {
  res.status(200).json(req.body);
};

module.exports = {
  Homepageshow,
  aboutpageshow,
  classespageshow,
  pricingpageshow,
  yogapageshow,
  contactpageshow,
  resultpageshow,
};
