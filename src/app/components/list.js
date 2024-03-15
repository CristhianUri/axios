// En un componente de React en tu proyecto de Next.js

import React ,{ useEffect, useState } from 'react';
import {obtenerPosts, crearPost, actualizarPost, eliminarPost} from '../config/servicioAxios'

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [nuevoTitulo,setNuevoTitulo] = useState('');
 const [error , setError] = useState(null);
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const postsData = await obtenerPosts();
        console.log("Datos obtenidos: "+postsData)
        setPosts(postsData);
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      }
    };

    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const postsData = await obtenerPosts();
      setPosts(postsData);
    } catch (error) {
      console.error('Error al obtener los posts:', error);
    }
  };

  const agregarPost = async () => {
    try {
      const nuevoPost = await crearPost({ title: nuevoTitulo, body: 'Contenido del nuevo post', userId: 1 });
      setPosts([...posts, nuevoPost]); // Agrega el nuevo post a la lista de posts
      setNuevoTitulo(''); // Limpia el campo del título después de agregar el post
    } catch (error) {
      console.error('Error al agregar el post:', error);
    }
  };

  const actualizarPostExistente = async (postId) => {
    try {
      const updatedPost = await actualizarPost(postId, { title: 'Nuevo título' }); // Puedes ajustar el título aquí
      const updatedPosts = posts.map(post => (post.id === postId ? updatedPost : post));
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error al actualizar el post:', error);
    }
  };

  const eliminarPostExistente = async (postId) => {
    try {
      await eliminarPost(postId);
      const filteredPosts = posts.filter(post => post.id !== postId);
      setPosts(filteredPosts);
    } catch (error) {
      console.error('Error al eliminar el post:', error);
    }
  };
  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => actualizarPostExistente(post.id)}>Actualizar</button>
            <button onClick={() => eliminarPostExistente(post.id)}>Eliminar</button>
          </li>
          
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
          placeholder="Ingrese un nuevo título"
        />
        <button onClick={agregarPost}>Agregar Nuevo Post</button>
      </div>
    </div>
  );
};

export default PostList;