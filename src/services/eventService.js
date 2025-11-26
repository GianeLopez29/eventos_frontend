import api from './api';

export const eventService = {
  getEvents: async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await api.get(`/events?${params}`);
    return response.data;
  },

  getEvent: async (id) => {
    const response = await api.get(`/events/${id}`);
    return response.data;
  },

  createEvent: async (eventData) => {
    const response = await api.post('/events', eventData);
    return response.data;
  },

  updateEvent: async (id, eventData) => {
    const response = await api.put(`/events/${id}`, eventData);
    return response.data;
  },

  deleteEvent: async (id) => {
    const response = await api.delete(`/events/${id}`);
    return response.data;
  },

  getUserEvents: async () => {
    const response = await api.get('/events/my-events');
    return response.data;
  }
};