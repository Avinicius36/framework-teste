package coddify.blog.configuration;

import coddify.blog.repository.BlogRepository;
import coddify.blog.service.BlogService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


@Configuration
@ComponentScan
public class BeanConfiguration {

    @Bean
    public BlogService blogService(BlogRepository blogRepository) {
        return new BlogService(blogRepository);
    }
}
