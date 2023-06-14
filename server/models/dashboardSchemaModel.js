import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	end_year: {
		type: String,
		default: ''
	},
	intensity: {
		type: Number,
		default: ''
	},
	sector: {
		type: String,
		default: ''
	},
	topic: {
		type: String,
		default: ''
	},
	insight: {
		type: String,
		default: ''
	},
	url: {
		type: String,
		default: ''
	},
	region: {
		type: String,
		default: ''
	},
	start_year: {
		type: String,
		default: ''
	},
	impact: {
		type: String,
		default: ''
	},
	added: {
		type: Date,
		default: Date.now
	},
	published: {
		type: Date
	},
	country: {
		type: String,
		default: ''
	},
	relevance: {
		type: Number,
		default: ''
	},
	pestle: {
		type: String,
		default: ''
	},
	source: {
		type: String,
		default: ''
	},
	title: {
		type: String,
		default: ''
	},
	likelihood: {
		type: Number,
		default: ''
	}
});

const jsonDashboadrSchema = mongoose.model('Dashboard', schema);

export default jsonDashboadrSchema;
