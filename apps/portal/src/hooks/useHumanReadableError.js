import React from 'react';
import AppContext from '../AppContext';

export const useHumanReadableError = () => {
    const {t} = useContext(AppContext);

    const fromApiResponse = React.useCallback(async (res) => {
        // Bad request + Too many requests
        if (res.status === 400 || res.status === 429) {
            try {
                const json = await res.json();
                console.info('fromApiResponse called' );
                console.info('json is', json);
                if (json.errors && Array.isArray(json.errors) && json.errors.length > 0 && json.errors[0].message) {
                    return json.errors[0].message;
                }
            } catch (e) {
                // Failed to decode: ignore
                return false;
            }
        }
        return undefined;
    }, [t]);

    const getMessageFromError = React.useCallback((error, defaultMessage) => {
        if (typeof error === 'string') {
            console.log('got a human error, ', error);
            return error;
        }
        console.log('will return default message');
        return defaultMessage;
    }, [t]);

    return {fromApiResponse, getMessageFromError};
};