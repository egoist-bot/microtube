import React, { PureComponent } from 'react';

class Sprite extends PureComponent {
    render() {
        return (
            <svg className="icons">
                <symbol id="icon-back" viewBox="0 0 24 24">
                    <path d="M20.016 11.016v1.969h-12.188l5.578 5.625-1.406 1.406-8.016-8.016 8.016-8.016 1.406 1.406-5.578 5.625h12.188z" />
                </symbol>

                <symbol id="icon-menu" viewBox="0 0 24 24">
                    <path d="M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z" />
                </symbol>

                <symbol id="icon-search" viewBox="0 0 24 24">
                    <path d="M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281c-1.125 0.984-2.625 1.547-4.219 1.547-3.609 0-6.516-2.859-6.516-6.469s2.906-6.516 6.516-6.516 6.469 2.906 6.469 6.516c0 1.594-0.563 3.094-1.547 4.219l0.281 0.281h0.797z" />
                </symbol>

                <symbol id="icon-settings" viewBox="0 0 48 48">
                    <path d="M24 31.031c3.844 0 7.031-3.188 7.031-7.031s-3.188-7.031-7.031-7.031-7.031 3.188-7.031 7.031 3.188 7.031 7.031 7.031zM38.906 25.969l4.219 3.281c0.375 0.281 0.469 0.844 0.188 1.313l-4.031 6.938c-0.281 0.469-0.75 0.563-1.219 0.375l-4.969-1.969c-1.031 0.75-2.156 1.5-3.375 1.969l-0.75 5.25c-0.094 0.469-0.469 0.844-0.938 0.844h-8.063c-0.469 0-0.844-0.375-0.938-0.844l-0.75-5.25c-1.219-0.469-2.344-1.125-3.375-1.969l-4.969 1.969c-0.469 0.188-0.938 0.094-1.219-0.375l-4.031-6.938c-0.281-0.469-0.188-1.031 0.188-1.313l4.219-3.281c-0.094-0.656-0.094-1.313-0.094-1.969s0-1.313 0.094-1.969l-4.219-3.281c-0.375-0.281-0.469-0.844-0.188-1.313l4.031-6.938c0.281-0.469 0.75-0.563 1.219-0.375l4.969 1.969c1.031-0.75 2.156-1.5 3.375-1.969l0.75-5.25c0.094-0.469 0.469-0.844 0.938-0.844h8.063c0.469 0 0.844 0.375 0.938 0.844l0.75 5.25c1.219 0.469 2.344 1.125 3.375 1.969l4.969-1.969c0.469-0.188 0.938-0.094 1.219 0.375l4.031 6.938c0.281 0.469 0.188 1.031-0.188 1.313l-4.219 3.281c0.094 0.656 0.094 1.313 0.094 1.969s0 1.313-0.094 1.969z" />
                </symbol>

                <symbol id="icon-delete" viewBox="0 0 48 48">
                    <path d="M37.969 7.969v4.031h-27.938v-4.031h6.938l2.063-1.969h9.938l2.063 1.969h6.938zM12 37.969v-24h24v24c0 2.156-1.875 4.031-4.031 4.031h-15.938c-2.156 0-4.031-1.875-4.031-4.031z" />
                </symbol>

                <symbol id="icon-edit" viewBox="0 0 48 48">
                    <path d="M41.438 14.063l-3.656 3.656-7.5-7.5 3.656-3.656c0.75-0.75 2.063-0.75 2.813 0l4.688 4.688c0.75 0.75 0.75 2.063 0 2.813zM6 34.5l22.125-22.125 7.5 7.5-22.125 22.125h-7.5v-7.5z" />
                </symbol>

                <symbol id="icon-person" viewBox="0 0 48 48">
                    <path d="M24 28.031c5.344 0 16.031 2.625 16.031 7.969v4.031h-32.063v-4.031c0-5.344 10.688-7.969 16.031-7.969zM24 24c-4.406 0-7.969-3.563-7.969-7.969s3.563-8.063 7.969-8.063 7.969 3.656 7.969 8.063-3.563 7.969-7.969 7.969z" />
                </symbol>

                <symbol id="icon-close" viewBox="0 0 24 24">
                    <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z" />
                </symbol>

                <symbol id="icon-check" viewBox="0 0 48 48">
                    <path d="M19.969 34.031l18-18-2.813-2.906-15.188 15.188-7.125-7.125-2.813 2.813zM24 4.031c11.063 0 19.969 8.906 19.969 19.969s-8.906 19.969-19.969 19.969-19.969-8.906-19.969-19.969 8.906-19.969 19.969-19.969z" />
                </symbol>

                <symbol id="icon-cancel" viewBox="0 0 48 48">
                    <path d="M34.031 31.219l-7.219-7.219 7.219-7.219-2.813-2.813-7.219 7.219-7.219-7.219-2.813 2.813 7.219 7.219-7.219 7.219 2.813 2.813 7.219-7.219 7.219 7.219zM24 4.031c11.063 0 19.969 8.906 19.969 19.969s-8.906 19.969-19.969 19.969-19.969-8.906-19.969-19.969 8.906-19.969 19.969-19.969z" />
                </symbol>

                <symbol id="icon-add" viewBox="0 0 24 24">
                    <path d="M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z" />
                </symbol>

                <symbol id="icon-share" viewBox="0 0 48 48">
                    <path d="M36 32.156c3.188 0 5.813 2.625 5.813 5.813s-2.625 5.906-5.813 5.906-5.813-2.719-5.813-5.906c0-0.469 0-0.938 0.094-1.313l-14.156-8.25c-1.125 1.031-2.531 1.594-4.125 1.594-3.281 0-6-2.719-6-6s2.719-6 6-6c1.594 0 3 0.563 4.125 1.594l14.063-8.156c-0.094-0.469-0.188-0.938-0.188-1.406 0-3.281 2.719-6 6-6s6 2.719 6 6-2.719 6-6 6c-1.594 0-3-0.656-4.125-1.688l-14.063 8.25c0.094 0.469 0.188 0.938 0.188 1.406s-0.094 0.938-0.188 1.406l14.25 8.25c1.031-0.938 2.438-1.5 3.938-1.5z" />
                </symbol>

                <symbol id="icon-list" viewBox="0 0 24 24">
                    <path d="M6.984 6.984h14.016v2.016h-14.016v-2.016zM6.984 17.016v-2.016h14.016v2.016h-14.016zM6.984 12.984v-1.969h14.016v1.969h-14.016zM3 9v-2.016h2.016v2.016h-2.016zM3 17.016v-2.016h2.016v2.016h-2.016zM3 12.984v-1.969h2.016v1.969h-2.016z" />
                </symbol>

                <symbol id="icon-volume-mute" viewBox="0 0 24 24">
                    <path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063c-1.078 0.844-2.297 1.5-3.656 1.828v-2.063c0.844-0.234 1.594-0.656 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12c0-3.188-2.063-5.859-4.969-6.703v-2.063c4.031 0.891 6.984 4.5 6.984 8.766 0 1.5-0.375 2.953-1.031 4.172l-1.5-1.547c0.328-0.797 0.516-1.688 0.516-2.625zM16.5 12c0 0.234 0 0.422-0.047 0.609l-2.438-2.438v-2.203c1.5 0.75 2.484 2.25 2.484 4.031z" />
                </symbol>

                <symbol id="icon-volume-off" viewBox="0 0 24 24">
                    <path d="M6.984 9h4.031l4.969-5.016v16.031l-4.969-5.016h-4.031v-6z" />
                </symbol>

                <symbol id="icon-volume-down" viewBox="0 0 24 24">
                    <path d="M5.016 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6zM18.516 12c0 1.781-1.031 3.281-2.531 4.031v-8.063c1.5 0.75 2.531 2.25 2.531 4.031z" />
                </symbol>

                <symbol id="icon-volume-up" viewBox="0 0 24 24">
                    <path d="M14.016 3.234c4.031 0.891 6.984 4.5 6.984 8.766s-2.953 7.875-6.984 8.766v-2.063c2.906-0.844 4.969-3.516 4.969-6.703s-2.063-5.859-4.969-6.703v-2.063zM16.5 12c0 1.781-0.984 3.281-2.484 4.031v-8.063c1.5 0.75 2.484 2.25 2.484 4.031zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z" />
                </symbol>

                <symbol id="icon-play" viewBox="0 0 48 48">
                    <path d="M16.031 10.031l21.938 13.969-21.938 13.969v-27.938z" />
                </symbol>

                <symbol id="icon-pause" viewBox="0 0 48 48">
                    <path d="M28.031 10.031h7.969v27.938h-7.969v-27.938zM12 37.969v-27.938h7.969v27.938h-7.969z" />
                </symbol>

                <symbol id="icon-film" viewBox="0 0 32 32">
                    <path d="M0 4v24h32v-24h-32zM6 26h-4v-4h4v4zM6 18h-4v-4h4v4zM6 10h-4v-4h4v4zM24 26h-16v-20h16v20zM30 26h-4v-4h4v4zM30 18h-4v-4h4v4zM30 10h-4v-4h4v4zM12 10v12l8-6z" />
                </symbol>

                <symbol id="icon-skip-next" viewBox="0 0 48 48">
                    <path d="M31.969 12h4.031v24h-4.031v-24zM12 36v-24l16.969 12z" />
                </symbol>

                <symbol id="icon-skip-previous" viewBox="0 0 48 48">
                    <path d="M19.031 24l16.969-12v24zM12 12h4.031v24h-4.031v-24z" />
                </symbol>

                <symbol id="icon-loading" viewBox="0 0 32 32">
                    <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 8c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zM25.546 25.546c-2.55 2.55-5.94 3.954-9.546 3.954s-6.996-1.404-9.546-3.954-3.954-5.94-3.954-9.546c0-3.606 1.404-6.996 3.954-9.546l2.121 2.121c0 0 0 0 0 0-4.094 4.094-4.094 10.755 0 14.849 1.983 1.983 4.62 3.075 7.425 3.075s5.441-1.092 7.425-3.075c4.094-4.094 4.094-10.755 0-14.849l2.121-2.121c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546z" />
                </symbol>

                <symbol id="icon-queue" viewBox="0 0 24 24">
                    <path d="M18.984 11.016v-2.016h-3.984v-3.984h-2.016v3.984h-3.984v2.016h3.984v3.984h2.016v-3.984h3.984zM20.016 2.016c1.078 0 1.969 0.891 1.969 1.969v12c0 1.078-0.891 2.016-1.969 2.016h-12c-1.078 0-2.016-0.938-2.016-2.016v-12c0-1.078 0.938-1.969 2.016-1.969h12zM3.984 6v14.016h14.016v1.969h-14.016c-1.078 0-1.969-0.891-1.969-1.969v-14.016h1.969z" />
                </symbol>

                <symbol id="icon-more" viewBox="0 0 24 24">
                    <path d="M12 15.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM12 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM12 8.016c-1.078 0-2.016-0.938-2.016-2.016s0.938-2.016 2.016-2.016 2.016 0.938 2.016 2.016-0.938 2.016-2.016 2.016z" />
                </symbol>

                <symbol id="icon-clear" viewBox="0 0 24 24">
                    <path d="M6.984 6.984h14.016v2.016h-14.016v-2.016zM3 17.016v-2.016h14.016v2.016h-14.016zM5.016 12.984v-1.969h13.969v1.969h-13.969z" />
                </symbol>

                <symbol id="icon-enter" viewBox="0 0 32 32">
                    <path d="M12 16h-10v-4h10v-4l6 6-6 6zM32 0v26l-12 6v-6h-12v-8h2v6h10v-18l8-4h-18v8h-2v-10z" />
                </symbol>

                <symbol id="icon-user" viewBox="0 0 24 24">
                    <path d="M12 14.016c2.672 0 8.016 1.313 8.016 3.984v2.016h-16.031v-2.016c0-2.672 5.344-3.984 8.016-3.984zM12 12c-2.203 0-3.984-1.781-3.984-3.984s1.781-4.031 3.984-4.031 3.984 1.828 3.984 4.031-1.781 3.984-3.984 3.984z" />
                </symbol>

                <symbol id="icon-save" viewBox="0 0 24 24">
                    <path d="M15 9v-3.984h-9.984v3.984h9.984zM12 18.984c1.641 0 3-1.359 3-3s-1.359-3-3-3-3 1.359-3 3 1.359 3 3 3zM17.016 3l3.984 3.984v12c0 1.078-0.938 2.016-2.016 2.016h-13.969c-1.125 0-2.016-0.938-2.016-2.016v-13.969c0-1.078 0.891-2.016 2.016-2.016h12z" />
                </symbol>

                <symbol id="icon-subscriptions" viewBox="0 0 24 24">
                    <path d="M15.984 15.984l-6-3.234v6.516zM21.984 12v8.016c0 1.078-0.891 1.969-1.969 1.969h-16.031c-1.078 0-1.969-0.891-1.969-1.969v-8.016c0-1.078 0.891-2.016 1.969-2.016h16.031c1.078 0 1.969 0.938 1.969 2.016zM18 2.016v1.969h-12v-1.969h12zM20.016 8.016h-16.031v-2.016h16.031v2.016z" />
                </symbol>

                <symbol id="icon-playlist-add" viewBox="0 0 24 24">
                    <path d="M2.016 15.984v-1.969h7.969v1.969h-7.969zM18 14.016h3.984v1.969h-3.984v4.031h-2.016v-4.031h-3.984v-1.969h3.984v-4.031h2.016v4.031zM14.016 6v2.016h-12v-2.016h12zM14.016 9.984v2.016h-12v-2.016h12z" />
                </symbol>

                <symbol id="icon-playlist-play" viewBox="0 0 24 24">
                    <path d="M17.016 12.984l4.969 3-4.969 3v-6zM2.016 15v-2.016h12.984v2.016h-12.984zM18.984 5.016v1.969h-16.969v-1.969h16.969zM18.984 9v2.016h-16.969v-2.016h16.969z" />
                </symbol>

                <symbol id="icon-account" viewBox="0 0 24 24">
                    <path d="M6 17.016v0.984h12v-0.984c0-2.016-3.984-3.094-6-3.094s-6 1.078-6 3.094zM15 9c0-1.641-1.359-3-3-3s-3 1.359-3 3 1.359 3 3 3 3-1.359 3-3zM3 5.016c0-1.078 0.891-2.016 2.016-2.016h13.969c1.078 0 2.016 0.938 2.016 2.016v13.969c0 1.078-0.938 2.016-2.016 2.016h-13.969c-1.125 0-2.016-0.938-2.016-2.016v-13.969z" />
                </symbol>

                <symbol id="icon-chevron-down" viewBox="0 0 24 24">
                    <path d="M16.594 8.578l1.406 1.406-6 6-6-6 1.406-1.406 4.594 4.594z" />
                </symbol>

                <symbol id="icon-fullscreen" viewBox="0 0 24 24">
                    <path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z" />
                </symbol>

                <symbol id="icon-fullscreen-exit" viewBox="0 0 24 24">
                    <path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z" />
                </symbol>
            </svg>
        );
    }
}

export default Sprite;
