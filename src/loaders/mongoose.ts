import {connect} from "mongoose";

const {MONGODB_ENDPOINT, MONGODB_USERNAME, MONGODB_PWD, MONGODB_ENTRY_DATABASE} = process.env;

const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PWD}@${MONGODB_ENDPOINT}/${MONGODB_ENTRY_DATABASE}?retryWrites=true&w=majority`;

export default async () => connect(uri);
