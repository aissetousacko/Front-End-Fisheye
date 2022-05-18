function mediasFactory(data) {
    const { photographerId, title, image, video, likes } = data;

    function getMediaCardDOM() {

        const mediaArticle = document.createElement('article');
        mediaArticle.classList.add("media-article");

        if("video" in data) {
            const videoFile = `assets/photographers/${photographerId}/${video}`;
            // vidéo
            const videoElement = document.createElement('video');
            videoElement.classList.add("media-video");
            videoElement.setAttribute("controls", "");
            const sourceVideo = document.createElement('source');
            sourceVideo.setAttribute("src",videoFile);
            sourceVideo.setAttribute("type","video/mp4");
            
            mediaArticle.appendChild(videoElement);
            videoElement.appendChild(sourceVideo);
        } else {
            const picture = `assets/photographers/${photographerId}/${image}`;
            //image
            const img = document.createElement('img');
            img.setAttribute("src", picture);
            img.setAttribute("alt", title);
            img.classList.add("media-img");
            mediaArticle.appendChild(img);
        }

        // Div pour titre, nombre de likes et icone coeur
        const mediaDescription = document.createElement('div');
        mediaDescription.className = 'media-description';
        mediaArticle.appendChild(mediaDescription);       
        const mediaText = document.createElement('h3');
        mediaText.textContent = title;
        mediaDescription.appendChild(mediaText);

        // Div pour nombre de likes et icone coeur
        const mediaLikes = document.createElement('div');
        mediaLikes.className= 'media-likes';
        mediaDescription.appendChild(mediaLikes);
        const span = document.createElement('span');
        span.textContent = likes;
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-heart icon-heart';
        icon.setAttribute("tabindex", 0);
        icon.setAttribute("title", "Like icon");
        icon.setAttribute("role","button");
        mediaLikes.appendChild(span);
        mediaLikes.appendChild(icon);

        
        return mediaArticle;
    }

    return { getMediaCardDOM }
}
