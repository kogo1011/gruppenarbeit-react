terraform {
    backend "s3" {
      bucket = "reacts3-kogo1011" # hier müsst ihr euren eigenen S3 Bucket hinzufügen
      key = "github-actions.tfstate"
      region = "eu-central-1"
    }
}

