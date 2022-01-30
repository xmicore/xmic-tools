<script setup>
import '@fortawesome/fontawesome-free'
</script>

<template>
    <nav class="nav">
        <router-link class="nav-brand" to="/">
        <div class="logo_content">
            <span class="logo">&gt;&lt;</span>mic
        </div>
        </router-link>
        <ul class="nav_list" >
            <li>
                <router-link class="nav-item" to="/jenkins">
                    <i class="fab fa-jenkins icon-default"></i>
                    <i class="fas fa-arrow-circle-right icon-hover"></i>
                    <span class="link_name">Jenkins</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .nav {
        background-color: #36363a;
        padding: 6px 0 6px 14px;
        height: 100%;

        &:hover {
            outline: 10px solid var(--color-secondary);
        }

        a {
            text-decoration: none;
            color: #ccc;

            &:hover {
                color: #000;
                font-weight: 600;
            }
        }

        .logo_content {
            display: flex;
            justify-content: center;
            align-items: baseline;
            font-family: var(--font-family-secondary);
            font-size: 35px;
            color: #ccc;
            text-decoration: none;

            .logo {
                font-size: 25px;
                font-weight: 1000;
                color: var(--color-secondary);
            }
        }

        ul {
            position: relative;
            padding: 0px;

            li {
                position: relative;
                height: 50px;
                width: 100%;
                list-style: none;
                line-height: 50px;
                font-size: 1.2rem;
                border-top-left-radius: 12px;
                border-bottom-left-radius: 12px;

                &:hover {
                    background-color: var(--color-secondary);
                    
                    &::before {
                    content: '';
                    position: absolute;
                    bottom: 50px;
                    height: 50px;
                    right: 0;
                    width: 12px;
                    border-bottom-right-radius: 12px;
                    box-shadow: 0 12px 0 0 var(--color-secondary);
                    }

                    &::after {
                        content: '';
                        position: absolute;
                        bottom: -50px;
                        height: 50px;
                        right: 0;
                        width: 12px;
                        border-top-right-radius: 12px;
                        box-shadow: 0 -12px 0 0 var(--color-secondary);
                    }
                }

                a {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    border-top-left-radius: 12px;
                    border-bottom-left-radius: 12px;
                    padding: 0 0 0 0.5rem;       
                    
                    i {
                        position: absolute;
                        font-weight: bold;
                    }

                    .link_name {
                        margin-left: 2rem;
                    }

                    .icon-default {
                        transition: opacity .3s, transform .3s;
                    }

                    .icon-hover {
                        transition: opacity .3s, transform .3s;
                        transform: rotate(-180deg) scale(.5);
                        opacity: 0;
                    }

                    &:hover {

                        .icon-hover {
                            transform: rotate(0deg) scale(1);
                            opacity: 1;
                        }

                        .icon-default {
                            transform: rotate(180deg) scale(.5);
                            opacity: 0;
                        }
                    }
                }
            }
        }
    }
</style>