package coddify.blog.controller;

import coddify.blog.domain.BlogPost;
import coddify.blog.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@CrossOrigin(origins = "*")
@Controller
public class BlogAdminController {

    @Autowired
    BlogRepository blogRepository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String addBlogPost(Model model) {
        model.addAttribute("blogPost", new BlogPost());
        return "addBlogPost";
    }

    @RequestMapping(value = "/blogPost", method = RequestMethod.POST)
    public String saveBlogPost(@ModelAttribute BlogPost blogPost) {
        blogRepository.save(blogPost);
        return "result";
    }

}
