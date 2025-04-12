import { hash, compare } from 'bcryptjs';

// This is a simplified auth for static export
export const auth = {
  async createUser(email: string, password: string, name: string) {
    const hashedPassword = await hash(password, 12);
    // For static export, we'll use localStorage
    const user = { id: Date.now().toString(), email, name, password: hashedPassword };
    localStorage.setItem(`user_${email}`, JSON.stringify(user));
    return user;
  },

  async validateUser(email: string, password: string) {
    const userStr = localStorage.getItem(`user_${email}`);
    if (!userStr) return null;
    
    const user = JSON.parse(userStr);
    const isValid = await compare(password, user.password);
    if (!isValid) return null;
    
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}; 