import { notificationManager } from './../../services/notificationManager';

import { notifyAboutNewRoom } from './../notificationsActionCreators';

describe('actions - notificationsActionCreators', () => {

  it('notifyAboutNewRoom calls notificationManager properly', () => {
    // Arrange
    const newRoom = 'Marlon Brando';
    const expectedNotification = `New clients room - ${newRoom}`;
    spyOn(notificationManager, 'notifyUser');

    // Act
    const action = notifyAboutNewRoom(newRoom);
    action();

    // Assert
    expect(notificationManager.notifyUser.calls.count()).toEqual(1);
    expect(notificationManager.notifyUser).toHaveBeenCalledWith(expectedNotification);
  });
})
