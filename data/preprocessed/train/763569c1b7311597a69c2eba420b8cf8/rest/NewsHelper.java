package ro.mta.library_project.DBController;

public class NewsHelper {
    String url;
    String description;
    public NewsHelper(String url, String description)
    {
        this.url=url;
        this.description=description;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
