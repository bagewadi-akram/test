exports.getReq = async (req, res) => {
  try {
    res.status(200).json({ message: "Hii, You are Reaching to server" });
  } catch (error) {
    console.log(error.message);
  }
};
// module.exports = { getReq };
