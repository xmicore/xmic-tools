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
                    <i class="fab fa-jenkins"></i>
                    <span class="link_name">Jenkins</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .nav {
        background-color: #36363a;
        padding: 6px 14px;
        height: 100%;

        a {
            text-decoration: none;
             color: #fff;
        }

        .logo_content {
            display: flex;
            justify-content: center;
            align-items: baseline;
            font-family: var(--font-family-secondary);
            font-size: 35px;
            color: #fff;
            text-decoration: none;

            .logo {
                font-size: 25px;
                font-weight: 1000;
                color: var(--color-secondary);
            }
        }

        ul {
            padding: 0px;
            li {
                position: relative;
                height: 50px;
                width: 100%;
                list-style: none;
                line-height: 50px;
                font-size: 1.2rem;
                

                a {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    border-radius: 12px;
                    padding: 0 0.5rem;

                    &:hover {
                        background-color: var(--color-secondary);
                    }

                    box-icon {
                        height: 50px;
                    }
                    
                }
            }
        }
    }
</style>