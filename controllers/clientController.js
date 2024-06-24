const Client = require('../models/clientModel');
const catchAsync = require('./../utils/catchAsync');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {}
  Object.keys(obj).forEach(el =>{
    if(allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
}

exports.createClient = catchAsync(async (req, res, next) => {
    const newClient = await Client.create(req.body);

    res.status(201).json({
        status: 'created',
        data: {
          client: newClient
        }
      });
});

exports.getClient = catchAsync(async (req, res, next) => {
    const client = await Client.findOne({ name: req.params.name })
  
    if (!client) {
      return next(new AppError('No client found with that name', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        client
      }
    });
});

exports.getClientID = catchAsync(async (req, res, next) => {
    const client = await Client.findById(req.params.id);
  
    if (!client) {
      return next(new AppError('No client found with that ID', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        client
      }
    });
});

exports.deleteClient = catchAsync(async (req, res, next) => {
  const client = await Client.findByIdAndDelete(req.params.id);

  if (!client) {
    return next(new AppError('No client found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.updateClient = catchAsync(async(req, res, next) => {
  const filteredBody = filterObj(req.body, 'name');

  const updateClient = await Client.findByIdAndUpdate(req.params.id, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'sucess',
    data: {
      client:updateClient
    }
  });

});