terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

provider "docker" {
  host = "npipe:////./pipe/docker_engine"
}

resource "docker_image" "docker-image1" {
  name = "nginxdemos/hello"
}

resource "docker_container" "container1" {
  name  = "nginx"
  image = docker_image.docker-image1.image_id
  ports {
    internal = 80
    external = 8080
  }
}