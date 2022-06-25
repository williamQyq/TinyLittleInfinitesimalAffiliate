import { LambdaActions } from 'lambda-actions';
import { $connect, $disconnect, setName, sendPublic, sendPrivate, setPlayer } from './actions.js';
export const handler = async (event, context, callback) => {
    if (!event.requestContext) {
        return;
    }
    try {
        const connectionId = event.requestContext.connectionId;
        const routeKey = event.requestContext.routeKey;
        const body = JSON.parse(event.body || '{}');
        const lambdaActions = new LambdaActions();
        lambdaActions.action('$connect', $connect);
        lambdaActions.action('$disconnect', $disconnect);
        lambdaActions.action('setName', setName);
        lambdaActions.action('sendPublic', sendPublic);
        lambdaActions.action('sendPrivate', sendPrivate);
        lambdaActions.action('setPlayer', setPlayer);
        await lambdaActions.fire({
            action: routeKey,
            payload: body,
            meta: { connectionId },
        });
    }
    catch (err) {
        console.error(err);
    }
};
