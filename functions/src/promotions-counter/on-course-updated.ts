import * as functions from "firebase-functions";
import {db} from "../init";
import {firestore} from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export default async (change, context) => {

    if(context.params.courseId == 'stats') {
        return;
    }

    functions.logger.debug(`Running add course trigger ${context.params.courseId}`);

    const newData = change.after.data(),
            oldData = change.before.data();

    let increment = 0;

    if(!oldData.promo && newData.promo) {
        increment = 1;
    }
    else if (oldData.promo && !newData.promo) {
        increment = -1;
    }

    if (increment == 0) {
        return;
    }

    return db.doc(`courses/stats`).update({
        totalPromo: firestore.FieldValue.increment(increment)
    })
}