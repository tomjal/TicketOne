import { browserHistory } from 'react-router';

import { historyManager } from './../historyManager';

describe('services - historyManager', () => {

  it('', () => {
    spyOn(browserHistory, 'push');
    expect(browserHistory.push).toHaveBeenCalled();
    expect(browserHistory.push.calls.count()).toEqual(1);
  });
});
