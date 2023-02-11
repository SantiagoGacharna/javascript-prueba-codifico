<template>
    <div id="SearchUser">
        <div class="cont_search_bar">
            <h1 class="title">Find GitHub User</h1>
            <div class="search_bar">
                <input class="input_search" type="text" v-model="search">
                <div class="cont_icons">
                    <i class="fa-brands fa-github icon_git"></i>
                    <i class="fa-solid fa-magnifying-glass icon_search" @click="searchUser()"></i>
                </div>
            </div>
        </div>
        <div class="cont_info_user" v-if="notFound != null">
            <div class="card_user" v-if="notFound == ''">
                <div class="first_part">
                    <span class="text_first">{{ user.login }}</span>
                    <div class="cont_image" :style="{'background-image':  ` url(${user.avatar_url})`}"></div>
                    <span class="text_first">{{ new Date(user.created_at).toDateString() }}</span>
                </div>
                <div class="second_part">
                    <h1 class="text_name">{{ user.name }}</h1>
                    <div class="cont_location_twitter">
                        <div class="cont_location">
                            <i class="fa-solid fa-location-dot icon_location"></i>
                            <span>{{ user.location }}</span>
                        </div>
                        <div class="cont_twitter">
                            <i class="fa-brands fa-twitter icon_twitter"></i>
                            <span>@{{ user.twitter_username }}</span>
                        </div>
                    </div>
                    <div class="cont_blog">
                        <i class="fa-solid fa-blog icon_blog"></i>
                        <a :href="user.blog" target="_blank">{{ user.blog }}</a>
                    </div>
                    <div class="cont_down_card">
                        <div class="cont_stats">
                            <span class="title">REPOS</span>
                            <i class="fa-solid fa-code-branch icon_repos"></i>
                            <span class="value">{{ user.public_repos }}</span>
                        </div>
                        <div class="cont_stats">
                            <span class="title">FOLLOWERS</span>
                            <i class="fa-solid fa-users icon_followers"></i>
                            <span class="value">{{ user.followers }}</span>
                        </div>
                        <div class="cont_stats">
                            <span class="title">FOLLOWING</span>
                            <i class="fa-solid fa-user-group icon_following"></i>
                            <span class="value">{{ user.following }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="no_info" v-else>
                {{ notFound }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            search: '',
            user: {
                id: 0,
                login: null,
                avatar_url: null,
                created_at: null,
                name: null,
                location: null,
                twitter_username: null,
                blog: null,
                public_repos: null,
                followers: null,
                following: null
            },
            notFound: null
        }
    },
    methods: {
        searchUser () {
            this.axios.get('users/' + this.search).then((res) => {
                this.notFound = '';
                this.user = res.data;
            }).catch(() => {
                this.notFound = 'No hay usuarios que cumplan con el criterio de búsqueda';
            });
        }
    }
}
</script>
<style>
@import url("@/assets/css/searchUser.css");
</style>