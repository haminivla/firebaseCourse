import * as functions from "firebase-functions";
import {db} from "../init";
import {firestore} from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export default async (snap, context) => {

    functions.logger.debug(`Running add course trigger ${context.params.courseId}`);

    const course = snap.data();

    if(!course.promo) {
        return;
    }

    return db.doc(`courses/stats`).update({
        totalPromo: firestore.FieldValue.increment(-1)
    });
}