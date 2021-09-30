import React from 'react';
import Image from './Image'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'


const ContactSection = styled.section`
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .contact__section__header-image {
        width: 40%;
        max-width: 800px;
        min-width: 250px;
        transform: translateY(-156px);
        z-index: 2;
        filter: drop-shadow(5px -20px 20px #00000099)  drop-shadow(5px 2px 5px black); 

        img {
        }
    }
    
    h1 { 
        margin: 128px 0 0 0;
        padding: 0;
        line-height: 1;
        font-size: 16vw;
        font-family: var(--font-secondary);
        opacity: 0.8;

        div {
            transform: scaleX(-1);
            display: inline-block;
        }
        }

    form {
        transform: translateY(-280px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #448BAA;
        background-image:   linear-gradient(#448BAA, #00000033); 
        padding: 128px 32px 32px 32px;
        margin: 0 auto 32px auto;
        width: 40%;
        max-width: 800px;
        min-width: 300px;
        border-radius: 12px;

        
        input, textarea {
            font-family: 'Courier New', Courier, monospace;
            font-size: 1em;
            border-radius: 16px;
            margin: 8px 0px;
            padding: 24px 8px 24px 16px;
            width: 90%;
            outline: none;
            border: none;

            &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: #d149d1;
                font-weight: bold;
                opacity: 0.5; /* Firefox */
                }
         }

        input:first-child{ margin-top: 32px; }

        input[type=submit] { 
            font-family: var(--font-primary);
            margin-top: 32px;
            background-color: #FF2E00;
            color: white;
            width: 50%;
            min-width: 100px;
            text-transform: uppercase;
        }

        textarea {
            font-weight: bold;
        }
    }

`
export const ContactForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
    return (
    <ContactSection>
        <div id="contact"></div>
        <h1>konta<div>k</div>t</h1>
        <Image src='lbfv-contacts.png' className='contact__section__header-image'/>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nome / Name" {...register("First name", {required: true, maxLength: 80})} />
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input type="text" placeholder="Empresa - Evento / Company - Event" {...register("Empresa", {})} />
            <input type="text" placeholder="Assunto / Subject" {...register("Subject", {required: true})} />
            <textarea rows={5} placeholder="Mensagem / Message" {...register("Subject", {required: true})} />
            <input type="submit" />
        </form>
    </ContactSection>
    );
}
    