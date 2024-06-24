const City = require('../models/cityModel');
const catchAsync = require('./../utils/catchAsync');


exports.createCity = catchAsync(async (req, res, next) => {
    const newCity = await City.create(req.body);

    res.status(201).json({
        status: 'created',
        data: {
          city: newCity
        }
      });
})

exports.getCity = catchAsync(async (req, res, next) => {
  const city = await City.findOne({ name: req.params.name })

  if (!city) {
    return next(new AppError('No city found with that name', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      city
    }
  });
});

exports.getCityState = catchAsync(async (req, res, next) => {
  const cities = await City.find({ state: req.params.state })

  if (!cities) {
    return next(new AppError('No city found with that name', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      cities
    }
  });
});
