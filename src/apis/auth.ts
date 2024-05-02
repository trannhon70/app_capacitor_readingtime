import axios from 'axios';
import { LoginInput } from '../pages/Login/Login';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';

export const login = async (input: LoginInput) => {
        try {
                const res = await axios.post('/auth/login', input);
                return res.data;
        } catch (error) {
                return error.response.data;
        }
}
export const getAccessToken = async () => {
        try {
                const { data } = await Filesystem.readFile({
                        path: "access_token.txt",
                        directory: Directory.Data,
                        encoding: Encoding.UTF8,
                });
                return data as string
        } catch (error) {
                return null
        }
}

export const saveAccessToken = async (accessToken: string) => {
        await Filesystem.writeFile({
                path: "access_token.txt",
                data: accessToken,
                directory: Directory.Data,
                encoding: Encoding.UTF8,
        });
}

export const deleteAccessToken = async () => {
        return Filesystem.deleteFile({
                path: "access_token.txt",
                directory: Directory.Data,
        });
}