
import { Post, Project, SiteSettings, ContactMessage } from '../types';
import { DEFAULT_SETTINGS, INITIAL_POSTS, INITIAL_PROJECTS } from '../constants';

const KEYS = {
  SETTINGS: 'gwanwoo_settings',
  POSTS: 'gwanwoo_posts',
  PROJECTS: 'gwanwoo_projects',
  MESSAGES: 'gwanwoo_messages'
};

export const storageService = {
  getSettings: (): SiteSettings => {
    const data = localStorage.getItem(KEYS.SETTINGS);
    return data ? JSON.parse(data) : DEFAULT_SETTINGS;
  },
  saveSettings: (settings: SiteSettings) => {
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
  },
  
  getPosts: (): Post[] => {
    const data = localStorage.getItem(KEYS.POSTS);
    return data ? JSON.parse(data) : INITIAL_POSTS;
  },
  savePosts: (posts: Post[]) => {
    localStorage.setItem(KEYS.POSTS, JSON.stringify(posts));
  },

  getProjects: (): Project[] => {
    const data = localStorage.getItem(KEYS.PROJECTS);
    return data ? JSON.parse(data) : INITIAL_PROJECTS;
  },
  saveProjects: (projects: Project[]) => {
    localStorage.setItem(KEYS.PROJECTS, JSON.stringify(projects));
  },

  getMessages: (): ContactMessage[] => {
    const data = localStorage.getItem(KEYS.MESSAGES);
    return data ? JSON.parse(data) : [];
  },
  addMessage: (msg: Omit<ContactMessage, 'id' | 'date'>) => {
    const messages = storageService.getMessages();
    const newMsg: ContactMessage = {
      ...msg,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    localStorage.setItem(KEYS.MESSAGES, JSON.stringify([newMsg, ...messages]));
  }
};
