import axios from 'axios';

// URL base de JSONPlaceholder
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Obtener todos los posts
export const obtenerPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/post`);
    console.log('Posts:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    throw error;
  }
};

// Crear un nuevo post
export const crearPost= async (postData) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts `, postData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el post:', error);
    throw error;
  }
}

// Actualizar un post existente
export const actualizarPost= async (postId, newData)=> {
  try {
    const response = await axios.put(`${BASE_URL}/posts/${postId}`, newData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el post:', error);
    throw error;
  }
}

// Eliminar un post existente
export const eliminarPost= async (postId)=> {
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el post:', error);
    throw error;
  }
}

// Ejemplo de uso
// (async () => {
//   try {
//     // Obtener todos los posts
//     const posts = await obtenerPosts();
//     console.log('Posts:', posts);

//     // Crear un nuevo post
//     const nuevoPost = await crearPost({
//       title: 'Nuevo Post',
//       body: 'Contenido del nuevo post',
//       userId: 1
//     });
//     console.log('Nuevo Post:', nuevoPost);

//     // Actualizar el primer post existente
//     const postIdToUpdate = 1; // ID del post a actualizar
//     const updatedPost = await actualizarPost(postIdToUpdate, {
//       title: 'Post Actualizado',
//       body: 'Contenido actualizado del post'
//     });
//     console.log('Post Actualizado:', updatedPost);

//     // Eliminar el primer post existente
//     const postIdToDelete = 1; // ID del post a eliminar
//     const deletedPost = await eliminarPost(postIdToDelete);
//     console.log('Post Eliminado:', deletedPost);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// })();
