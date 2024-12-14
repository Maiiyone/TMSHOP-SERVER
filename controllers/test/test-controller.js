const getAllTest = (req, res) => {
    const allTest = [
        {
            id:1,
            name:'Test 1'
        },
        {
            id:2,
            name:'Test'
        }
    ];

    if (!allTest.length) {
      return res.status(404).json({
        success: false,
        message: "No Test found!",
      });
    }

    res.status(200).json({
      success: true,
      data: allTest,
    });
}
const getAllTest2 = (req, res) => {
  
  const allTest = [
      {
          id:3,
          name:'Test 3'
      },
      {
          id:4,
          name:'Test 4'
      }
  ];

  if (!allTest.length) {
    return res.status(404).json({
      success: false,
      message: "No Test found!",
    });
  }

  res.status(200).json({
    success: true,
    data: allTest,
  });
}
module.exports = { getAllTest ,getAllTest2}