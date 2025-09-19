terraform {
  backend "s3" {
    bucket       = "myawsitmbucket"
    key          = "terraform.tfstate"
    region       = "eu-central-1"
    use_lockfile = true
    encrypt      = true
  }
}
