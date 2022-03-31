import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../api/posts";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("hello");
        fetchAllPosts()
            .then(({ data }) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                setPosts([]);
            });
    }, [setPosts]);
    return (


        <div className="col-10 text-center mx-auto">

            <Table responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        posts.map((post, index) => {
                            return <>
                                <tr>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td><div><button style={{
                                        margin: '10px',
                                        boxSizing: 'content-box',
                                        width: '50px',
                                        borderRadius: '30px',
                                        backgroundColor: '#8D8DAA',
                                        borderColor: '#8D8DAA'
                                    }}> <Link style={{ color: '#F7F5F2', textDecoration: 'none' }} to={`/post/${post.id}`}>View</Link></button>
                                        <button style={{
                                            margin: '10px',
                                            boxSizing: 'content-box',
                                            width: '50px',
                                            borderRadius: '30px',
                                            color: '#8D8DAA',
                                            backgroundColor: '#F7F5F2',
                                            borderColor: '#8D8DAA'
                                        }}>Edit</button>
                                        <button style={{
                                            margin: '10px',
                                            boxSizing: 'content-box',
                                            width: '50px',
                                            borderRadius: '30px',
                                            color: '#F7F5F2',
                                            backgroundColor: '#8D8DAA',
                                            borderColor: '#8D8DAA'
                                        }}>Delete</button></div></td>
                                </tr>
                            </>

                        })
                    }
                    {/* <tr>
                        <td>1</td>
                        {Array.from({ length: 2 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 2 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>3</td>
                        {Array.from({ length: 2 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr> */}
                </tbody>
            </Table>
        </div>

    )
}