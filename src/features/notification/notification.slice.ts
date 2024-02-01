import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { NotificationState } from './notification.types'

const initialState: NotificationState = {
  notifications: [],
}

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotification: (state, action) => {
      state.notifications = [...state.notifications, action.payload]
    },
    clearNotification: (state, action) => {
      const { id } = action.payload
      const notificationToClear = state.notifications.find((notification) => notification.id === id)
      if (notificationToClear) {
        state.notifications = state.notifications.filter((notification) => notification.id !== id)
      }
    },
    clearAllNotifications: (state) => {
      state.notifications = []
    },
  },
})

export const { setNotification, clearNotification, clearAllNotifications } = notificationSlice.actions
export default notificationSlice.reducer

export const selectNotificationState = (state: { notification: NotificationState }) => state.notification

export const selectCurrentNotification = createSelector(
  selectNotificationState,
  (notification: NotificationState) => notification.notifications[notification.notifications.length - 1]
)
