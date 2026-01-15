import amplitude from 'amplitude-js';

const AMPLITUDE_API_KEY = '116855b0057399ca389200bc27dfb428';

amplitude.getInstance().init(AMPLITUDE_API_KEY);

export const logEvent = (eventName, eventProps = {}) => {
  amplitude.getInstance().logEvent(eventName, eventProps);
};

export const logPageView = (pageName) => {
  logEvent('Page View', { page: pageName });
};
